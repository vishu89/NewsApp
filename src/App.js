import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
	
	
	constructor(props)
	{
		super(props);
		this.state = {
			
			items: [],
			isLoaded: false,
			isClicked: false,
			input: '',
			output:[],
			fullview: true
			
		}
		
		//
		
		fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eadb6da4bb5847a8b5f5b8a633e53ab9').
		then(res =>res.json()).
	then(json => {
		
		this.setState({
			isLoaded: true,
			items : json,
			
		})
		
		console.log(this.state.items);
		var news = document.querySelector("#s_news");
		news.style.display = "none";
		
		var app = document.querySelector("#app");
		var author = document.querySelector("#author");
		var publishdate = document.querySelector("#publishdate");
		var url = document.querySelector("#url");
		var title = document.querySelector("#title");
		var des = document.querySelector("#des");
		var img = document.querySelector("#image");
		if(this.state.fullview === true){
		for(var i=0;i< this.state.items.articles.length; i++)
		{
			if(this.state.items.articles[i].author && this.state.items.articles[i].content)
			{
			app.innerHTML += 
			
			
			
			
			
			'<div id="block"> <div><span id="author">' + (this.state.items.articles[i].author)    +  '</span> ' +  '<span id="publishdate">' + '    '+ this.state.items.articles[i].publishedAt + '</span> </div>' +
				'<br />' + '<a id="url" href=' + this.state.items.articles[i].url + '> &' + '</a>'+
				'<br /><div id="title">' +this.state.items.articles[i].title + '</div>' + 
				
				
				
				'<br /><div id="des">' + this.state.items.articles[i].content+ '</div> </div> <hr />'
			
			
			console.log("if");
			}
			
		}
	}
	
	else  {console.log("else"); app.innerHTML = "<div>" +this.state.output.length+ "</div>";
			
			
	
	}
		
	})
		
		//
		//
		
		
		
		//
		
		
	}
	
	
	
	changes = (e) =>
	{
		e.preventDefault();
		
		//
		
		this.setState({input:e.target.value,
    	    isClicked:false});



    			
      
      
     


      
      }
		
		
		
		
	user =(e) =>
	{
		
		e.preventDefault();
		
		var string = this.state.input;
		console.log(string);
		var out = [];
		if(string)
		{
		for(var i=0; i< this.state.items.articles.length; i++)
		{
			var art = this.state.items.articles[i].content;
			if(art)
			{
				var s = art.toLowerCase();
				var lis = s.split(" ");
				string = string.toLowerCase();
			    for(var j=0; j<lis.length; j++)
				{
					if(string === lis[j])
					{
						out.push(
						{
							author:  this.state.items.articles[i].author,
							publishedAt:    this.state.items.articles[i].publishedAt,
							url:    this.state.items.articles[i].url,
							title:   this.state.items.articles[i].title,
							content: this.state.items.articles[i].content
						}
						)
						continue;
					}
						
				}
				
				
			}
			
		}
		
		
		
		}
		else{alert("No input found!"); return  0;} 
		
		
		
		
		
			
		
		
		
			var print = document.querySelector("#print_search");
			console.log(out);
			if(out.length)
			{	
			for(var j=0; j<out.length; j++)
			{console.log(print);
				print.innerHTML += 
				
				'<div id="block"> <div><span id="author">' + out[j].author   +  '</span> ' +  '<span id="publishdate">' + '    '+ out[j].publishedAt + '</span> </div>' +
				'<br />' + '<a id="url" href=' + out[j].url + '> &' + '</a>'+
				'<br /><div id="title">' + out[j].title + '</div>' + 
				
				
				
				'<br /><div id="des">' + out[j].content+ '</div> </div><br /> <hr /> '
				
				
				
				
			}
			var content = document.querySelector("#content");
			content.style.display = "none";	
			var news = document.querySelector("#s_news");
			news.style.display = "block";
			
			}
			else{ alert("No matches found!") }
			
		
		
		
		
		
		
		
		
	}
	
	
	back =(e)=>
	{	
		this.setState({fullview: true});
		var content = document.querySelector("#content");
content.style.display = "block";	
var news = document.querySelector("#s_news");
		news.style.display = "none";
		
	}
	
	
	
	
  render() {
	  
	    if(this.state.isLoaded)
	{
		
		
    return (
	<div>
	<div id="content">
	<div id="search" > 
			<form id="form" onSubmit = {this.user} >
			<input id="searching" type="text" onChange = {this.changes} />
			<button type="submit"className="button"> Search </button>
			
			
			</form><br /><br />
	  
      <div className="App" id="app">
	  
	  
	  </div>
				
				
		</div>
		</div>
		<div id="s_news"> 
		<form>
		<button onClick ={this.back}> Back </button>
		</form>
		<div id="print_search"> </div>
		</div>
		</div>
    );
	}
	
	
	
	
	else
	{
			return(
			
			<div className="App">
        Loading ... 
		
		
	</div>
			
			
			)
	}
	
  }
  
}


export default App;
