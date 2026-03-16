import { NextResponse } from "next/server";

// ይህ የባክኤንድ ኮድ ነው (Node.js ኮድ)
export async function POST(request: Request) {
  const body = await request.json();
  const { username } = body;

  // እዚህ ጋር ዳታቤዝ ውስጥ "ይህ ሰው ላይክ ተደርጓል" ብለን መመዝገብ እንችላለን
  console.log(`${username} ላይክ ተደርጓል!`);

  return NextResponse.json({
    message: `${username} በተሳካ ሁኔታ ላይክ ተደርጓል!`,
    status: "success",
  });
}
