import { auth } from 'firebase';
import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from "./maker.module.css";

const Maker = ({authService}) => {
    const [cards,setCards ] = useState({
        '1' : 
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
        '2' :  {
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
        '3' : {
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
    });


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
    const createOrUpdateCard = (card)=>{
        setCards(cards =>{
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        })
    }
    const deleteCard = (card)=>{
        setCards(cards =>{
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        })
    }
    return( 
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} addCard ={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard = {deleteCard}/>
                <Preview cards={cards} />
            </div>
            <Footer/>
        </section>
        )
    
}
export default Maker;