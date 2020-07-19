import { Component, OnInit, Input } from '@angular/core';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';

@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.scss'],
})

export class UploadPhotosComponent implements OnInit {
  
  imageResponse: Array<any>=[];

  constructor(
     private imagePicker: ImagePicker
    ) { }

  ngOnInit() {}

  async pickMultipleImagePicker(){

    const options:ImagePickerOptions={
      maximumImagesCount:3,
      width:100,
      height:100
    }
    const results=await this.imagePicker.getPictures(options);
    for (let i = 0; i < results.length; i++) {
    this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
    }
    console.log(results,"resultsFromMobile");
  }
}

