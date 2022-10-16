marked.setOptions({
    breaks: true
  });

  const renderer = new marked.Renderer();

function App(){
    const [text,setText] = React.useState("");

    return(
        <div id="container">

            <div id="editor">
                <textarea name="text" id="text" value={text} onChange={(e) => setText(e.target.value)} ></textarea>
            </div>

            <div id="preview"
                dangerouslySetInnerHTML = {{
                    __html: marked({text}, {renderer: renderer} )
                }}>
            </div>

        </div>
        
    )
}


ReactDOM.render(<App />, document.getElementById("root"))