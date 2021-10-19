import React,{useState} from 'react';

export default function App() {
  
  const [screenValue,setScreenValue]= useState('');
  const [result,setResult] = useState(0);
  const [accumulator,setAccumulator] = useState(0);
  const [did, setDid] = useState(false);

const Screen=(value, res)=>{
  return (
    <div style={screenCss}>
      <span style={actionCss}>{value}</span>
      <span style={resCss}>{res}</span>
    </div>
  )
}

const Btn=(label, onClick)=>{
  return (
    <button style={buttonCss} onClick={onClick}>{label}</button>
  )
}

//functions
const addScreenDigits=(d)=>{
  if((d== '+' || d=='-' || d=='*' || d=='/') & did){
      console.log("*-+/")
      did(false)
      setScreenValue(result+d)
      return
  }

  if(did){
    setScreenValue(d)
    setDid(false)
    return
  }
  const valueTypedScreen=screenValue+d
  setScreenValue(valueTypedScreen)
}

const clearMemory=()=>{
  setDid(false)
  setScreenValue('')
  setResult(0)
  setAccumulator(0)
  return
}

const Action=(act)=>{
  if (act == 'bs'){
    let vScreen=screenValue
    vScreen=vScreen.substring(0, (vScreen.length-1))
    setScreenValue(vScreen)
    setDid(false)
    return
  }
  try {
    const r=eval(screenValue) //Calculation
    setAccumulator(r)
    setResult(r)
    setDid(true)
  }catch{
    setResult('ERROR')
  }
}


//Stylization
const cssContainer={
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  width: 300,
  border: '1px solid #000'
}

const cssButtons={
  flexDirection: 'row',
  flexWarp: 'wrap'
}

const screenCss={
  display:'flex',
  paddingLeft:20,
  paddingRight:20,
  justifyContent:'center',
  alignItems:'flex-start',
  backgroundColor: '#444',
  flexDirection: 'column',
  width: 260
}

const actionCss={
  fontSize:25,
  color: '#fff',
  height: 20
}

const resCss={
  fontSize:50,
  color: '#fff'
}

const buttonCss={
  fontSize:30,
  height:75,
  width: 75,
  padding: 20,
  backgroundColor: '#000',
  color: '#fff',
  borderColor: '#000',
  textAlign: 'center',
  outline: 'none'
}


  return (
    <>
        <div style={cssContainer}>
          <h3>Simple Calculator</h3>
          {Screen(screenValue, result)}
          <div style={cssButtons}>
            {Btn('CC', clearMemory)}
            {Btn('(',()=>addScreenDigits('('))}
            {Btn(')',()=>addScreenDigits(')'))}
            {Btn('/',()=>addScreenDigits('/'))}
            {Btn('7',()=>addScreenDigits('7'))}
            {Btn('8',()=>addScreenDigits('8'))}
            {Btn('9',()=>addScreenDigits('9'))}
            {Btn('*',()=>addScreenDigits('*'))}
            {Btn('4',()=>addScreenDigits('4'))}
            {Btn('5',()=>addScreenDigits('5'))}
            {Btn('6',()=>addScreenDigits('6'))}
            {Btn('-',()=>addScreenDigits('-'))}
            {Btn('1',()=>addScreenDigits('1'))}
            {Btn('2',()=>addScreenDigits('2'))}
            {Btn('3',()=>addScreenDigits('3'))}
            {Btn('+',()=>addScreenDigits('+'))}
            {Btn('0',()=>addScreenDigits('0'))}
            {Btn('.',()=>addScreenDigits('.'))}
            {Btn('C',()=>Action('bs'))}
            {Btn('=',()=>Action('='))}
          </div>
        </div>
    </>

  );
}