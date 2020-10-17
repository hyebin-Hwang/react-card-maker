import { auth } from 'firebase';
import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from "./maker.module.css";

const Maker = ({authService}) => {
    const [cards,setCards ] = useState([
        {
            id : "1",
            name : "Ellie",
            company : "sansung",
            title : "Software Engineer",
            email : "ellie@gmail.com",
            message : "go for it",
            fileName : "ellie",
            fileURL : "d",
            theme : "Dark",
        },
        {
            id : "2",
            name : "Son",
            company : "sansung",
            title : "Software Engineer",
            email : "ellie@gmail.com",
            message : "go for it",
            fileName : "ellie",
            fileURL :"d",
            theme : "Light", 
        },
        {
            id : "3",
            name : "James",
            company : "LG",
            title : "Engineer",
            email : "ellie@gmail.com",
            message : "go for it",
            fileName : "ellie",
            fileURL : null,
            theme : "Colorful",
        },
    ])

    const history = useHistory();
    const onLogout = () =>{
        authService.logout();
    }
    useEffect(()=>{
        authService.onAuthChange(user =>{
            if(!user){
                history.push('/');
            }
        })
    })
    const addCard = (card)=>{
        const updated = [...cards,card];
        setCards(updated);
    }
    return( 
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} addCard ={addCard} />
                <Preview cards={cards} />
            </div>
            <Footer/>
        </section>
        )
    
}
export default Maker;