 /*new gridjs.Grid({

    columns: ["Class Works","Linkler"],
    data : [
        { 
            name: 'Name',
            surname :html(` <a href="https://github.com/RecepTayyipIlhan/JavaScript-APIs">Repoya Ulaşmak İçin Tıklayınız</a> `)
          },
          'Email',
          { 
            name: 'Actions',
            formatter: (_, row) => html(` <a href="https://github.com/RecepTayyipIlhan/JavaScript-APIs">Repoya Ulaşmak İçin Tıklayınız</a> `)
          },
          
    ],
    
    pagination : {limit : 2},
    sort : true,
    style : {
        th: {
            'border-color' : "black",
            'background-color': '#31bcce',
            color: 'white',
            'border-bottom': '2px solid black',
            'text-align': 'center'
          },
        td:{
            border: '1px solid #ccc'
        },
        table:{
            'font-size' : '15px'
        }
    },
    
}).render(document.getElementById("wrapper"))*/
function get_Data () {
  const tableRef = useRef(null);
  const wrapperRef = useRef(null);
  
  useEffect(() => {
    const grid = new Grid({
      from: tableRef.current,
    }).render(wrapperRef.current);
  });
  return (
    <>
      <table ref={tableRef}>
  <tr>
      <th>Class Works</th>
      <th>Linkler</th>
  </tr>
  <tr>
    <td>CW0</td>
    <td>
      <a href="https://receptayyipilhan.github.io/JavaScript-APIs/CW0/Counting.html">Counting</a>
    </td>
  </tr>
  <tr>
      <td>CW1</td>
      <td>
          <a href="https://receptayyipilhan.github.io/JavaScript-APIs/CW1/TCKimlik.html">Iban & Tc Kimlik</a> 
      </td>
  </tr>

  <tr>
      <td>CW2</td>
      <td>
          <a href="https://receptayyipilhan.github.io/JavaScript-APIs/CW2/ObjectList .html">Objects And Arrays</a> 
      </td>
  </tr>
  <tr>
    <td>CW3</td>
    <td>
        <a href="https://receptayyipilhan.github.io/JavaScript-APIs/CW3/cw4.html">Inspector</a> 
    </td>
</tr>


</table>
      <div ref={wrapperRef}></div>
      </>
  );
  
}

get_Data();
console.log("sfgsdgds");
  