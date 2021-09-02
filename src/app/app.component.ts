import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("myform", { static: false }) myForm;
  defaultQuestion = "teacher";
  gender = ["male", "female"];
  quesAns = "";

  isSubmit: boolean;
  user = { name: "", email: "", secret: "", answer: "", gender: "" };
  suggestUserName() {
    const suggestedName = "Superuser";
    // this.myForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: "pallavi@gmail.com",
    //   },
    //   secret: "teacher",
    //   quesAns: "dc",
    //   gender: "male",
    // });
    this.myForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    this.isSubmit = true;
    console.log(this.myForm);
    this.user.name = this.myForm.value.userData.username;
    this.user.email = this.myForm.value.userData.email;
    this.user.secret = this.myForm.value.secret;
    this.user.answer = this.myForm.value.quesAns;
    this.user.gender = this.myForm.value.gender;

    this.myForm.reset();
  }
}
