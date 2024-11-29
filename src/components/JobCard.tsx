"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  BriefcaseIcon,
  MapPinIcon,
  CurrencyIcon as CurrencyDollarIcon,
} from "lucide-react";
import { Job } from "@/models/Job";

export function JobCard({ job }: Readonly<{ job: Job }>) {
  const router = useRouter();

  return (
    <Card
      className="hover:shadow-lg transition-shadow cursor-pointer capitalize"
      onClick={() => router.push(`/job/${job.jobId}`)}
    >
      <CardHeader className="flex flex-row items-center gap-4 px-3 md:p-4">
        <div className="w-20 h-20 relative rounded-full overflow-hidden">
          <Image
            src={job.companyLogo}
            alt={`${job.postedBy} logo`}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-justify w-3/4">
          <CardTitle className="md:text-xl leading-relaxed">
            {job.title}
          </CardTitle>
          <Badge variant="secondary">{job.companyName}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 my-4 md:w-3/4">
          <JobDetail
            icon={<MapPinIcon className="w-4 h-4" />}
            value={job.location}
          />
          <JobDetail
            icon={<BriefcaseIcon className="w-4 h-4" />}
            value={job.jobType}
          />
          <JobDetail
            icon={<CalendarIcon className="w-4 h-4" />}
            value={job.experience}
          />
          <JobDetail
            icon={<CurrencyDollarIcon className="w-4 h-4" />}
            value={job.salary}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{job.domain}</Badge>
          <Badge variant="secondary">{job.postingDate}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

function JobDetail({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-2 w-fit">
      {icon}
      <span className="text-sm">{value}</span>
    </div>
  );
}
