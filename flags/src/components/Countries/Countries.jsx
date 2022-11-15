import React, {useEffect, useState} from "react";
import styled from "styled-components"
import Country from "../Country/Country.jsx";
import {useSelector, useDispatch} from "react-redux";

const CountriesStyled = styled.div`
    display:grid;
    grid-row-gap: 2.3em;
    background: var(--background);
    justify-content: center;
    padding: 4em 2em;


`

function Countries(){
    const dispatch = useDispatch()
    const countries = useSelector(state=> state.countries)
    // const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=> {
            return res.json()
        })
        .then((data)=>{
            dispatch({
                type: "SET_COUNTRY_LIST",
                payload: list,
            })
            // setCountries(data)
        })
        .catch(()=>{
            console.log("Hubo un error")
        })
    },[])
    return(
        <Countries>
            {
                countries.map(country=>{
                    return(
                        <Country 
                            flag={country.flag}
                            name={country.name}
                            key={country.name} 
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                        />
                    )
                })
            }

        </Countries>
    )
}

export default Countries;