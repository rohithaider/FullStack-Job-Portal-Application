import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Chip,
  } from "@material-tailwind/react";
  
  export default function JobCard({ job }) {
    return (
      <Card className="border border-gray-200 p-4 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <img
            src={job.company_logo}
            alt={`${job.company} logo`}
            className="h-12 w-12 rounded-full mr-3"
          />
          <div>
            <Typography variant="h6" color="blue-gray" className="font-semibold">
              {job.company}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="flex items-center gap-1"
            >
              <span role="img" aria-label="location">
                📍
              </span>
              {job.location}
            </Typography>
          </div>
        </div>
        <CardBody className="p-0 mb-4">
          <Typography variant="h5" color="blue-gray" className="font-bold">
            {job.title} {job.jobType === "Remote" && <Chip value="Remote" />}
          </Typography>
          <Typography variant="small" color="gray" className="opacity-75 mb-2">
            Fulltime • Posted {new Date().toLocaleDateString()}
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 mb-4"
          >
            {job.description}
          </Typography>
          <div className="flex flex-wrap gap-2">
            {job.requirements.map((skill, index) => (
              <Chip key={index} value={skill} className="bg-blue-gray-300" />
            ))}
          </div>
        </CardBody>
        <CardFooter className="pt-4 flex justify-between ">
          <Typography color="blue-gray" className="font-medium">
            {job.salaryRange.currency.toUpperCase()} {job.salaryRange.min} -{" "}
            {job.salaryRange.max}
          </Typography>
          <Button
            ripple={false}
            size="sm"
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            Apply Now
          </Button>
        </CardFooter>
      </Card>
    );
  }
  