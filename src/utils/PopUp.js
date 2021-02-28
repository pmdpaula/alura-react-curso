import M from 'materialize-css'

const PopUp = {
  exibeMensagem: (status, mensagem) => {
    if ( status === "success" ) {
      M.toast({html: mensagem, classes: 'green', displayLength: 2000})
    }

    if ( status === "error" ) {
      M.toast({html: mensagem, classes: 'red', displayLength: 2000})
    }
  }
}

export default PopUp;


// const PopUp = {
//     exibeMensagem: (status, msg) => {
//         if(status === 'success'){
//             M.toast({html: msg, classes: 'green', displayLenght: 2000});
//         }

//         if(status === 'error'){
//             M.toast({html: msg, classes: 'red', displayLength: 2000});
//         }
//     }
// }

// export default PopUp;
