import React, { Component } from 'react';

const Search = () => 
{
    return(
        <div className="container">
            <div className="row">
                <div className="col-xs-9 col-xs-offset-3 col-sm-9 col-sm-offset-3 col-md-9 col-md-offset-3 col-lg-9 col-lg-offset-3">
                    <h4>Busca un artista, canción, álbum o playlist</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-9 col-xs-offset-3 col-sm-9 col-sm-offset-3 col-md-9 col-md-offset-3 col-lg-9 col-lg-offset-3">
                    <input type="text" placeholder="Escribir..."/>
                </div>
            </div>
        </div>
    );
}

export default Search;