const axios = require('axios')


//-----------------------------------------------------------------------------
//Data Ruko
//role 1 = 
exports.tampilkanSemua = async (req, res)=>{
    try{
        console.log(req.auth.role);
        if(req.auth.role !== 1){
            res.status(500).json({
                error:true,
                massage:'Anda Tidak Memiliki Akses'
            })
        }
    
        // //const body = {
        //     id : ,
        //     lapak: .
        // }
        const data = await axios.get("http://localhost:3003/dataruko");   
        console.log(data)
        if(!data){
            res.status(500).json({
                error:true,
                massage:'Eror bos'
            })
        }
        res.status(500).json({
            error: false,
            data: data.data
        })
    } catch(error){
        res.status(500).json({
            error:true,
            massage: error.message
        })
    }
    
    
    }

exports.tambahDataRuko = async (req, res)=>{
        try{
        
            console.log(req.auth.role);
            if(req.auth.role !== 1){
                res.status(500).json({
                    error:true,
                    massage:'Anda Tidak Memiliki Akses'
                })
            }
            const data = await axios.post("http://localhost:3003/dataruko/tambahdata",req.body);   
            console.log(data)
            if(!data){
                res.status(500).json({
                    error:true,
                    massage:'Eror bos'
                })
            }
            res.status(500).json({
                error: false,
                data: data.data
            })
        } catch(error){
            res.status(500).json({
                error:true,
                massage: error.message
            })
        }
        
        }

        exports.editdataRuko = async (req, res)=>{
            try{
            
                console.log(req.auth.role);
                if(req.auth.role !== 1){
                    res.status(500).json({
                        error:true,
                        massage:'Anda Tidak Memiliki Akses' 
                    })
                }
                const data = await axios.put("http://localhost:3003/dataruko/ubahdata/"+req.params.id_ruko,req.body);   
                console.log(data)
                if(!data){
                    res.status(500).json({
                        error:true,
                        massage:'Eror bos'
                    })
                }
                res.status(500).json({
                    error: false,
                    data: data.data
                })
            } catch(error){
                res.status(500).json({
                    error:true,
                    massage: error.message
                })
            }
            
            
            }

            exports.deleteDataRuko = async (req, res)=>{
                try{
                
                    console.log(req.auth.role);
                    if(req.auth.role !== 1){
                        res.status(500).json({
                            error:true,
                            massage:'Anda Tidak Memiliki Akses'
                        })
                    }
                    const data = await axios.delete("http://localhost:3003/dataruko/hapus/"+req.params.id_ruko);   
                    console.log(data)
                    if(!data){
                        res.status(500).json({
                            error:true,
                            massage:'Eror bos'
                        })
                    }
                    res.status(500).json({
                        error: false,
                        data: data.data
                    })
                } catch(error){
                    res.status(500).json({
                        error:true,
                        massage: error.message
                    })
                }
                
                
                }
    
        
      




//role 2 = user
exports.tampilkanUntukUser = async (req, res)=>{
    try{
        console.log(req.auth.role);
        if(req.auth.role !== 2){
            res.status(500).json({
                error:true,
                massage:'Anda tidak memiliki akses'
            })
        }
    
        // //const body = {
        //     id : ,
        //     lapak: .
        // }
        const data = await axios.get("http://localhost:3003/dataruko/tampil");   
        console.log(data)
        if(!data){
            res.status(500).json({
                error:true,
                massage:'Eror bos'
            })
        }
        res.status(500).json({
            error: false,
            data: data.data
        })
    } catch(error){
        res.status(500).json({
            error:true,
            massage: error.message
        })
    }    
}

exports.cariBerdasarkanNamaHarga = async (req, res)=>{     //butuh keyword. keyword
    try{
        console.log(req.auth.role);
        if(req.auth.role !== 2){
            res.status(500).json({
                error:true,
                massage:'token salah'
            })
        }
    
        // //const body = {
        //     id : ,
        //     lapak: .
        // }
        const search = req.query.keyword;
        const data = await axios.get("http://localhost:3003/dataruko/cari?keyword="+search);   
        console.log(data)
        if(!data){
            res.status(500).json({
                error:true,

                massage:'Eror bos'
            })
        }
        res.status(500).json({
            error: false,
            data: data.data
        })
    } catch(error){
        res.status(500).json({
            error:true,
            massage: error.message
        })
    }    
}


exports.tampilkanDetail = async (req, res)=>{     //butuh keyword. keyword
    try{
        console.log(req.auth.role);
        if(req.auth.role !== 2){
            res.status(500).json({
                error:true,
                massage:'token salah'
            })
        }
    
        // //const body = {
        //     id : ,
        //     lapak: .
        // }
        const data = await axios.get("http://localhost:3003/dataruko/tampil/"+req.params.id_ruko);   
        console.log(data)
        if(!data){
            res.status(500).json({
                error:true,

                massage:'Eror bos'
            })
        }
        res.status(500).json({
            error: false,
            data: data.data
        })
    } catch(error){
        res.status(500).json({
            error:true,
            massage: error.message
        })
    }    
}

exports.filterHarga = async (req, res)=>{     //butuh keyword. keyword
    try{
        console.log(req.auth.role);
        if(req.auth.role !== 2){
            res.status(500).json({
                error:true,
                massage:'token salah'
            })
        }
    
        // //const body = {
        //     id : ,
        //     lapak: .
        // }
        const search = req.query.keyword;
        const data = await axios.get("http://localhost:3003/dataruko/filterharga?keyword="+search);   
        console.log(data)
        if(!data){
            res.status(500).json({
                error:true,

                massage:'Eror bos'
            })
        }
        res.status(500).json({
            error: false,
            data: data.data
        })
    } catch(error){
        res.status(500).json({
            error:true,
            massage: error.message
        })
    }    
}



//----------------------------------------------------------------------------
//data order
//user 2

exports.tampilkanPelanggan = async (req, res)=>{
    try{
        console.log(req.auth.role);
        if(req.auth.role !== 2){
            res.status(500).json({
                error:true,
                massage:'Anda Tidak Memiliki Akses'
            })
        }
    
        // //const body = {
        //     id : ,
        //     lapak: .
        // }
        const data = await axios.get("http://localhost:3004/tampil");   
        console.log(data)
        if(!data){
            res.status(500).json({
                error:true,
                massage:'Eror bos'
            })
        }
        res.status(500).json({
            error: false,
            data: data.data
        })
    } catch(error){
        res.status(500).json({
            error:true,
            massage: error.message
        })
    }
    
    
    }

    
exports.tampilkanRukoOrder = async (req, res)=>{
    try{
        console.log(req.auth.role);
        if(req.auth.role !== 2){
            res.status(500).json({
                error:true,
                massage:'Anda Tidak Memiliki Akses'
            })
        }
    
        // //const body = {
        //     id : ,
        //     lapak: .
        // }
        const data = await axios.get("http://localhost:3004/tampilruko");   
        console.log(data)
        if(!data){
            res.status(500).json({
                error:true,
                massage:'Eror bos'
            })
        }
        res.status(500).json({
            error: false,
            data: data.data
        })
    } catch(error){
        res.status(500).json({
            error:true,
            massage: error.message
        })
    }
    
    
    }

    exports.tambahDataPelanggan = async (req, res)=>{
        try{
        
            console.log(req.auth.role);
            if(req.auth.role !== 2){
                res.status(500).json({
                    error:true,
                    massage:'Anda Tidak Memiliki Akses'
                })
            }
            const data = await axios.post("http://localhost:3004/tambahcst",req.body);   
            console.log(data)
            if(!data){
                res.status(500).json({
                    error:true,
                    massage:'Eror bos'
                })
            }
            res.status(500).json({
                error: false,
                data: data.data
            })
        } catch(error){
            res.status(500).json({
                error:true,
                massage: error.message
            })
        }
        
        }

        exports.mengorder = async (req, res)=>{
            try{
            
                console.log(req.auth.role);
                if(req.auth.role !== 2){
                    res.status(500).json({
                        error:true,
                        massage:'Anda Tidak Memiliki Akses'
                    })
                }
                const data = await axios.post("http://localhost:3004/transaksi",req.body);   
                console.log(data)
                if(!data){
                    res.status(500).json({
                        error:true,
                        massage:'Eror bos'
                    })
                }
                res.status(500).json({
                    error: false,
                    data: data.data
                })
            } catch(error){
                res.status(500).json({
                    error:true,
                    massage: error.message
                })
            }
            
            }


            exports.tampilkanDetailTransaksi = async (req, res)=>{
                try{
                    console.log(req.auth.role);
                    if(req.auth.role !== 2){
                        res.status(500).json({
                            error:true,
                            massage:'Anda Tidak Memiliki Akses'
                        })
                    }
                
                    // //const body = {
                    //     id : ,
                    //     lapak: .
                    // }
                    const data = await axios.get("http://localhost:3004/tampil/"+req.params.kodeorder);   
                    console.log(data)
                    if(!data){
                        res.status(500).json({
                            error:true,
                            massage:'Eror bos'
                        })
                    }
                    res.status(500).json({
                        error: false,
                        data: data.data
                    })
                } catch(error){
                    res.status(500).json({
                        error:true,
                        massage: error.message
                    })
                }
                
                
                }
            

//Role Employee    


    
        exports.tambahDataRukoOrder = async (req, res)=>{
            try{
            
                console.log(req.auth.role);
                if(req.auth.role !== 1){
                    res.status(500).json({
                        error:true,
                        massage:'Anda Tidak Memiliki Akses'
                    })
                }
                const data = await axios.post("http://localhost:3004/dataruko/tambahrko",req.body);   
                console.log(data)
                if(!data){
                    res.status(500).json({
                        error:true,
                        massage:'Eror bos'
                    })
                }
                res.status(500).json({
                    error: false,
                    data: data.data
                })
            } catch(error){
                res.status(500).json({
                    error:true,
                    massage: error.message
                })
            }
            
            }

            exports.tampilkanGroupRuko = async (req, res)=>{
                try{
                    console.log(req.auth.role);
                    if(req.auth.role !== 1){
                        res.status(500).json({
                            error:true,
                            massage:'Anda Tidak Memiliki Akses'
                        })
                    }
                
                    // //const body = {
                    //     id : ,
                    //     lapak: .
                    // }
                    const data = await axios.get("http://localhost:3004/tampilgroup");   
                    console.log(data)
                    if(!data){
                        res.status(500).json({
                            error:true,
                            massage:'Eror bos'
                        })
                    }
                    res.status(500).json({
                        error: false,
                        data: data.data
                    })
                } catch(error){
                    res.status(500).json({
                        error:true,
                        massage: error.message
                    })
                }



            }




















// exports.getAllDataRuko = async (req, res)=>{
// try{
//     console.log(req.auth.role);
//     if(req.auth.role !== 2){
//         res.status(500).json({
//             error:true,
//             massage:'Eror bos'
//         })
//     }

//     // //const body = {
//     //     id : ,
//     //     lapak: .
//     // }
//     const data = await axios.get("http://localhost:3001/dataruko/");   
//     console.log(data)
//     if(!data){
//         res.status(500).json({
//             error:true,
//             massage:'Eror bos'
//         })
//     }
//     res.status(500).json({
//         error: false,
//         data: data.data
//     })
// } catch(error){
//     res.status(500).json({
//         error:true,
//         massage: error.message
//     })
// }


// }



exports.post = async (req, res)=>{
    try{
    
        // //const body = {
        //     id : ,
        //     lapak: .
        // }
        const data = await axios.post("http://localhost:3001/dataruko/",req.body);   
        console.log(data)
        if(!data){
            res.status(500).json({
                error:true,
                massage:'Eror bos'
            })
        }
        res.status(500).json({
            error: false,
            data: data.data
        })
    } catch(error){
        res.status(500).json({
            error:true,
            massage: error.message
        })
    }
    
    
    }

    
    

// exports.filterharga = async (req, res)=>{

//     try{
//         if(req.auth.role !== 1 ){
//             res.status(500).json({
//                 error:true,
//                 massage:'Eror bos'
//             })
//         }
//         // //const body = {
//         //     id : ,
//         //     lapak: .
//         // }
//         const data = await axios.get("http://localhost:3001/dataruko/"+req.params.harga);   
//         console.log(data)
//         if(!data){
//             res.status(500).json({
//                 error:true,
//                 massage:'Eror bos'
//             })
//         }
//         res.status(500).json({
//             error: false,
//             data: data.data
//         })
//     } catch(error){
//         res.status(500).json({
//             error:true,
//             massage: error.message
//         })
//     }
    
    
//     }
