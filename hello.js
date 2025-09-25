export default function handler(req, res) {
  console.log("Hello World"); // you'll see this in Vercel logs
  res.status(200).send("Hello World"); // FCC will see this in the response
}
