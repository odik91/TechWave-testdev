import sendEmail, { SendMailOptions } from "@/utils/sendEmail";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { subject, name, message, email } = body as SendMailOptions;

  try {
    await sendEmail({ subject, name, message, email });
    return Response.json({
      message: `Success`,
      note: `Email from ${email} has been sent`,
    });
  } catch (error) {
    console.log(error);

    return Response.json({ message: "Error" });
  }

  // return NextResponse.json({message: "ok", body})
}
