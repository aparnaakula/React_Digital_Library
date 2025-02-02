import { useSubmit } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { title, author, isbn, genre} from "../redux/slices/RootSlice"

interface ContactFormProps {
  id?: string[]
}

const ContactForm = ( props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {

      dispatch(title(data.title));
      dispatch(author(data.author));
      dispatch(isbn(data.isbn));
      dispatch(genre(data.genre));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 500);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <Input {...register('title')} name='title' placeholder="title" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Input {...register('author')} name='author' placeholder="author" />
        </div>
        <div>
          <label htmlFor="isbn">isbn</label>
          <Input {...register('isbn')} name='isbn' placeholder="isbn" />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <Input {...register('genre')} name='genre' placeholder="genre" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm      