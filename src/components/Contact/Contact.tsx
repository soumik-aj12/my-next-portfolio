import React, {useState} from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {createClient} from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const Contact = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const handleChange = (e:any)=>{
    setFormData({
      ...formData, [e.target.id]: e.target.value
    })
  }

  const handleSubmit = async (e:any)=>{
    e.preventDefault();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth:{
        user: "",
        pass: ""
      }
    });
    const mailOptions = {
      from: '',
      to: '',
      subject:'Feedback on Portfolio',
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    };
    transporter.sendMail(mailOptions, (error, info)=>{
      if(error){
        console.error(error);
      }
      else{
        console.log(`Email sent: ${info.response}`);
        
      }
    })
  };

  return (
    <div className="flex flex-col md:h-[100vh] w-[85vw] md:w-[50vw] items-center justify-evenly">
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl text-green-500 lg:mb-6">contact</div>
        <div className="flex flex-col lg:flex-row gap-4 text-justify">
        <Card className="w-[350px]">
      <CardHeader>
        {/* <CardTitle>Feedback</CardTitle> */}
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="john doe" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="johndoe@mail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="feedback">Message</Label>
              <Input id="feedback" placeholder="your message" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>Send</Button>
      </CardFooter>
    </Card>
        </div>
      </div>
    </div>
  )
}

export default Contact