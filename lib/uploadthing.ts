import { generateReactHelpers } from "@uploadthing/react/hooks";
 
import { OurFileRouter } from "@/app/api/uploadthing/route";
 
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();