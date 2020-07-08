export interface loginModel{

}



export interface RegistrationModel{
     name:string,
     mobileNumber:String,
     email:String,
     password:String,
     role:String,
     gender:String,
     height:String,
     birthDate:Date,
     cast:Date,
     address:string,
     education:string,
     profession:string,
     income:string,
     images:[
       {
         filename: String, 
         url: String 
       }
     ], 
}