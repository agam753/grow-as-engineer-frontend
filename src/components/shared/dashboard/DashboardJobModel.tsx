"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";
import FormTextArea from "./FormTextArea";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  title: "",
  jobLocation: "",
  companyName: "",
  salaryRange: "",
  experience: "",
  domain: "",
  jobType: "",
  postingDate: "",
  jobDetails: {
    aboutJob: "",
    aboutRole: "",
    aboutCompany: "",
    requirements: "",
    jobLink: "",
  },
};
const DashboardJobModel: React.FC<{
  children: React.ReactNode;
  title: string;
  isEdit: boolean;
  jobId?: string;
}> = ({ children, title, isEdit, jobId }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/jobs/${jobId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isEdit && jobId) {
      fetchJob();
    } else {
      setIsLoading(false);
    }
  }, [isEdit, jobId]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    if (name in formData.jobDetails) {
      setFormData({
        ...formData,
        jobDetails: { ...formData.jobDetails, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = Object.values(formData).every((value) =>
      typeof value === "string"
        ? value.trim() !== ""
        : Object.values(value).every((v) => v.trim() !== "")
    );
    if (!isValid) {
      alert("Please fill in all fields.");
      return;
    }

    const url = `http://localhost:8000/jobs${isEdit ? jobId : ""}`;
    const method = isEdit ? "PUT" : "POST";

    const sendData = async (method: string, url: string) => {
      try {
        setIsLoading(true);
        const response = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error("Failed to save job data");
        }
        toast({
          title: "Job saved successfully!",
          variant: "default",
          description: "Job data saved successfully.",
        });
        // if successfully saved, close the dialog
        setIsOpen(false);
        setFormData(initialState);
      } catch (error) {
        const errorMessage = (error as Error).message;
        toast({
          title: "Failed to save job data",
          variant: "destructive",
          description: errorMessage,
        });
        console.error("Error saving job:", error);
      } finally {
        setIsLoading(false);
      }
    };
    sendData(method, url);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        style={{
          width: "1200px",
          height: "600px",
        }}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {isLoading ? (
            <div className="h-full flex items-center justify-center">
              <LoadingSpinner />
            </div>
          ) : (
            <ScrollArea className="max-h-[500px] overflow-y-auto pt-4 pr-3">
              <form onSubmit={formSubmitHandler}>
                <div className="grid grid-cols-2 gap-4">
                  <FormInput
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Location"
                    name="jobLocation"
                    value={formData.jobLocation}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Company"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Salary"
                    name="salaryRange"
                    value={formData.salaryRange}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Domain"
                    name="domain"
                    value={formData.domain}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Job Type"
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleInputChange}
                  />
                  <FormInput
                    label="Posting Date"
                    name="postingDate"
                    value={formData.postingDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <FormTextArea
                    label="About Job"
                    name="aboutJob"
                    value={formData.jobDetails.aboutJob}
                    onChange={handleInputChange}
                  />
                  <FormTextArea
                    label="About Role"
                    name="aboutRole"
                    value={formData.jobDetails.aboutRole}
                    onChange={handleInputChange}
                  />
                  <FormTextArea
                    label="About Company"
                    name="aboutCompany"
                    value={formData.jobDetails.aboutCompany}
                    onChange={handleInputChange}
                  />
                  <FormTextArea
                    label="Requirements"
                    name="requirements"
                    value={formData.jobDetails.requirements}
                    onChange={handleInputChange}
                  />
                  <FormTextArea
                    label="Job Link"
                    name="jobLink"
                    value={formData.jobDetails.jobLink}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex justify-end mt-4">
                  <DialogClose asChild>
                    <Button className="mx-2" type="button" variant="outline">
                      Close
                    </Button>
                  </DialogClose>
                  <Button variant={"destructive"} type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </ScrollArea>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DashboardJobModel;
