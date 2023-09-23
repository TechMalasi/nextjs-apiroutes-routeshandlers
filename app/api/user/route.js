import { NextResponse } from 'next/server'

export async function GET() {

    // const data={"msg":"success"}
    //   return NextResponse.json({ data })


  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    headers: {
      'Content-Type': 'application/json',
    //   'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()

  return NextResponse.json({ data })
}

export async function POST(req) {

 const body = await req.json();

  const name = body.name;
  const email = body.email;
  const mobile = body.mobile;
  const address = body.address;

//   const user = await User.create({name,email,mobile,address});

  return NextResponse.json({ msg: "Post data succesfully" });


    return NextResponse.json({ data })
  }