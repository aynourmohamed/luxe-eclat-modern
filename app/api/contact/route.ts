export async function POST(request: Request) {
    const data = await request.json();
    console.log("Contact form submission:", data);
  
    return Response.json({ success: true });
  }