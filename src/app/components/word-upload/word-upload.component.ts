import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Word } from 'src/app/models/Word';
import { WordService } from 'src/app/services/word.service';

@Component({
  selector: 'app-word-upload',
  templateUrl: './word-upload.component.html',
  styleUrls: ['./word-upload.component.css']
})
export class WordUploadComponent {

  wordForm !: FormGroup

  constructor(private formBuilder : FormBuilder, private wordService: WordService){
    this.wordForm = this.formBuilder.group({

      word: ['', Validators.required],
      definition : ['', Validators.required],
      notes : ''
    })
  }

  uploadWord(){
    if (this.wordForm.valid) {
      const newWord: Word = {
        word : this.wordForm.get('word')?.value,
        definition : this.wordForm.get('definition')?.value,
        notes : this.wordForm.get('notes')?.value
      }
    this.wordService.uploadWord(newWord).subscribe( (res) => {
      console.log(res.body)
    })
    }
    else{
      window.alert('Inserire una parola e una definizione')
    }

  }
}
