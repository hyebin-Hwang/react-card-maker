import React,{useRef} from 'react';
import styles from './card_add_form.module.css';
import Button from "../button/button"
import { useState } from 'react';

const CardAddForm = ({ onAdd,FileInput } ) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();
  const [file,setFile] = useState({ fileName : null,fileURL : null });

  const onFileChange = file =>{
    console.log(file)
    setFile({
      fileName : file.name,
      fileURL : file.url,
    })
  }

  const onSubmit = (e) => {
      e.preventDefault()
      const card = {
        id : Date.now(),
        name  : nameRef.current.value || "",
        company  : companyRef.current.value || "",
        title : titleRef.current.value || "",
        email : emailRef.current.value || "",
        message :  messageRef.current.value || "",
        theme :   themeRef.current.value || "",
        fileName : file.fileName || '',
        fileURL : file.fileURL || '',
      }
      formRef.current.reset();
      setFile({ fileName : null,fileURL : null })
      onAdd(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="name" />
      <input ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="company"
      />
      <select ref={themeRef}className={styles.select} name="theme" placeholder="theme">
        <option placeholder="light">Light</option>
        <option placeholder="dark">Dark</option>
        <option placeholder="colorful">Colorful</option>
      </select>
      <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="Title"/>
      <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="Email"/>
      <textarea ref={messageRef} className={styles.textarea} name="message" placeholder="Message" />
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Add" onClick={onSubmit} />
    </form>
  );
};

export default CardAddForm;
