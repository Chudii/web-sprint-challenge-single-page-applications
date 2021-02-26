import React, { useState } from 'react';
import '../components/Pizza.css';
import * as yup from 'yup';
import axios from 'axios';

const Pizza = () => {
    const defaultState = {
        name: "",
        size: "",
        pepperoni: false,
        sardines: false,
        sausages: false,
        chicken: false,
        instructions: ""
    }
    const [formState, setFormState] = useState(defaultState);
    const [errors, setErrors] = useState({...defaultState});

    let formSchema = yup.object().shape({
        name: yup.string().required("Please provide your name").min(2,"Invalid Entry"),
        size: yup.string().required("Please pick a size"),
    })

    const formSubmit = e => {
        e.preventDefault();
        console.log("Form Submitted!");
    }

    const validateChange = e => {
        e.persist();
        yup.reach(formSchema, e.target.name).validate(e.target.value)
            .then(valid => setErrors({
                ...errors,
                [e.target.name]: ""   
            }))
            .catch(error => setErrors({
                ...errors,
                [e.target.name]: error.errors[0]
            }));
    }

    const change = e => {
        const value = 
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({
            ...formState,
            [e.target.name]: value
        });
        validateChange(e);
    }

    return (
        <form className="center" onSubmit={formSubmit}>
            <h2>Build Your Pizza</h2>
            <label htmlFor="name">
                Name
                <input onChange={change} type="text"/>
            </label>

            <label htmlFor="size">
                Size
                <select>
                    <option></option>
                    <option value="1">Small</option>
                    <option value="2">Medium</option>
                    <option value="3">Large</option>
                    <option value="4">EXTRA LARGE</option>
                </select>
            </label>    

            <label className="toppings" htmlFor="toppings">
                Pepperoni
                <input type="checkbox"/>
            </label>
            <label className="toppings" htmlFor="toppings">
                Sardines
                <input type="name"/>
            </label>
            <label className="toppings" htmlFor="toppings">
                Sausages
                <input type="checkbox"/>
            </label>
            <label className="toppings" htmlFor="">
                Chicken
                <input type="checkbox"/>
            </label>

            <label htmlFor="name">
                Special Instructions
                <input onChange={change} type="text" />
            </label>



        </form>
    )
}

export default Pizza;
