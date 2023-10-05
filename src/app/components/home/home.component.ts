import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaperService } from 'src/app/services/paper.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  articleForm !: FormGroup;
  categories : String[] = ["Trending", "Crypto", "Forex" , "Gold", "Stocks"]
  selectedCategories : String[] = []

  constructor(private formBuilder: FormBuilder, private paperService:PaperService) {
    // Inizializza il FormGroup utilizzando FormBuilder
    this.articleForm = this.formBuilder.group({

      title: '',
      abstract : '',
      text : '',
      categories : [],
      date : [null],
      author : ''
    })
  
  }

  handleFileInput(event: any) {
    const fileInput = event.target;
    const file = fileInput.files[0];
    this.articleForm.addControl('file', this.formBuilder.control(file))
  }
  addCategory(event: any){
    const status : boolean = event.target.checked
    status ? this.selectedCategories.push(event.target.name) : this.removeByName(event.target.name)
  }
  removeByName(name: String){
    this.selectedCategories = this.selectedCategories.filter((item)=> item !== name )
  }


uploadArticle() {
  const formData = new FormData();
  const file = this.articleForm.get('file')!.value as File;
  formData.append('title', this.articleForm.get('title')!.value);
  formData.append('file',file);
  formData.append('abstract', this.articleForm.get('abstract')!.value);
  formData.append('text', this.articleForm.get('text')!.value);
  formData.append('categories',  JSON.stringify(this.selectedCategories));
  formData.append('date', this.articleForm.get('date')!.value);
  formData.append('author', this.articleForm.get('author')!.value);
  this.paperService.uploadPaper(formData).subscribe()
}

}