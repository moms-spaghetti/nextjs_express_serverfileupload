import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, reset } = useForm();

  const uploadFile = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title)
    formData.append('file', data.file[0])
    const res = await fetch('http://localhost:5000/', {
      method: "POST",
      body: formData
    })
    reset()
  }

  return (
    <div>
      <Head>
        <title>next js frontend vimeo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>next js frontend vimeo</h1>
        <form onSubmit={handleSubmit(uploadFile)}>
          <h3>File upload to backend</h3>
          filename: <input ref={register} name="title" type="text" />
          <br />
          <input ref={register} name="file" type="file" />
          <hr />
          <h3>File upload to vimeo</h3>
          <br />
          <input type="submit" />
        </form>
      </main>
    </div>
  )
}
