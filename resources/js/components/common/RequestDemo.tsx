"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useMemo, useState } from "react";

export default function RequestDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");

  const isValidEmail = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()),
    [email]
  );

  const isFormValid = useMemo(
    () => name.trim().length > 0 && company.trim().length > 0 && isValidEmail,
    [name, company, isValidEmail]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    // TODO: handle submit
    // console.log({ name, email, company });
  };

  return (
    <div className="max-sm:w-full">
      <Dialog>
        <form onSubmit={onSubmit} className="max-sm:w-full">
          <DialogTrigger asChild className="max-sm:w-full">
            <Button size="lg" className="text-xs sm:text-sm sm:w-[150px]">
              Book a Demo{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
                />
              </svg>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto border-1 border-primary">
            <DialogHeader className="bg-primary text-white px-6 py-4 -m-6 mb-6">
              <DialogTitle className="text-xl font-medium">
                Request a Demo:
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 px-2">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-sm font-medium text-gray-700">1.</span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 mb-3">
                      Please provide the following information to request a
                      demo:
                    </p>
                    <Label className="text-sm font-medium text-gray-800">
                      What's your name?<span>This question is required.*</span>
                    </Label>
                    <Textarea
                      className="mt-2 min-h-[60px] resize-none border-b-1 border-gray-600 rounded-none border-t-0 border-l-0 border-r-0 bg-transparent focus-visible:ring-0 shadow-none"
                      placeholder="Type your answer here..."
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-sm font-medium text-gray-700">2.</span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 mb-3">
                      Please provide the following information to request a
                      demo:
                    </p>
                    <Label className="text-sm font-medium text-gray-800">
                      What's your email address?
                      <span>This question is required.*</span>
                    </Label>
                    <Textarea
                      className="mt-2 min-h-[60px] resize-none border-b-1 border-gray-600 rounded-none border-t-0 border-l-0 border-r-0 bg-transparent focus-visible:ring-0 shadow-none"
                      placeholder="Type your answer here..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-invalid={email.length > 0 && !isValidEmail}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-sm font-medium text-gray-700">3.</span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700 mb-3">
                      Please provide the following information to request a
                      demo:
                    </p>
                    <Label className="text-sm font-medium text-gray-800">
                      What's your company name?
                      <span>This question is required.*</span>
                    </Label>
                    <Textarea
                      className="mt-2 min-h-[60px] resize-none border-b-1 border-gray-600 rounded-none border-t-0 border-l-0 border-r-0 bg-transparent focus-visible:ring-0 shadow-none"
                      placeholder="Type your answer here..."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <DialogFooter className="mt-8 flex justify-end gap-3">
              <DialogClose asChild>
                <Button
                  variant="outline"
                  className="px-6 shadow-none border-red-500 text-red-500"
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                variant="default"
                disabled={!isFormValid}
                className="shadow-none disabled:cursor-not-allowed bg-neutral-300"
              >
                Okay
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
