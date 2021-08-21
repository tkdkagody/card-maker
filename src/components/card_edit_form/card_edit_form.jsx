import React, { useRef } from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';

const CardEditForm = ({ card, updateCard, deleteCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const {
    name,
    company,
    title,
    email,
    message,
    theme,
    fileName,
    fileURL,
  } = card;

  const onChange = (event) => {
    if(event.currentTarget ===null) return;
    event.preventDefault();
    updateCard ({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const onSubmit = (event) => {
    deleteCard(card) ;
  };
  return (
    <form className={styles.form}>
      <input 
        onChange={onChange}
        ref={nameRef}
        className={styles.input} type="text" name="name" value={name} />
      <input
        onChange={onChange}
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        value={company}
      />
      <select 
        onChange={onChange}
        ref={themeRef}
        className={styles.select} name="theme" value={theme}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input 
        onChange={onChange}
        ref={titleRef}
        className={styles.input} type="text" name="title" value={title} />
      <input 
        onChange={onChange}
        ref={emailRef}
        className={styles.input} type="text" name="email" value={email} />
      <textarea 
        onChange={onChange}
        ref={messageRef}
        className={styles.textarea} name="message" value={message} />
      <div className={styles.fileInput}>
        <ImageFileInput />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
