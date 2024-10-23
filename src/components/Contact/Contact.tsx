"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "../ui/use-toast";
import Loading from "@/loading";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if(formData.name === "" ||  formData.email === "" || formData.message === "") {
        toast({description: "Please enter all the fields!"})
        
      }else{
        setLoading(true);
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setLoading(false);
        toast({
          description: "Feedback Sent!",
        });
      } else {
        setLoading(false);
        toast({ description: "Failed to send feedback" });
      }
      }

    } catch (e) {
      console.log(e);
    } finally {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col w-[85vw] md:w-[50vw] items-center justify-evenly my-4"
    >
      {loading && <Loading />}
      <div className="flex flex-col items-center justify-center">
        <div className="text-4xl text-green-500 lg:mb-6">contact me</div>
        <div className="flex flex-col lg:flex-row gap-4 text-justify">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Send a feedback</CardTitle>
              {/* <CardDescription>Send a feedback.</CardDescription> */}
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="john doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="johndoe@mail.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Input
                      id="message"
                      placeholder="your message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={handleSubmit}>
                {loading ? "Sending" : "Send"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
