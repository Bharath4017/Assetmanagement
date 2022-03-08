import React from 'react'
import { useHistory,withRouter } from 'react-router-dom'; 

function AllocateAssets() {
  let ehistory = useHistory()
  const handleSubmit =()=>{
    ehistory.push('/Asset_Allotment')
  }
  const handleClick =()=>{
    ehistory.push('/assignasset')
  }
  return (
    <div style={{paddingTop:"20px"}}>
        <div className='d-flex flex-row justify-content-center align-center mt-3'>
        <div className='d-flex  flex-row align-items-center p-1' 
        onClick={handleSubmit}>
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect width="32" height="32" rx="4" fill="#666"/>
         <path d="M26.66 21.67a.19.19 0 0 1 0 .08c.007.03.007.06 0 .09a.28.28 0 0 1-.21.1h-3.51c.09-.226.11-.473.06-.71a5.88 5.88 0 0 0-1.16-2.52c.325-.093.662-.14 1-.14a3.85 3.85 0 0 1 3.79 3.1h.03zM9 21.94H5.55a.32.32 0 0 1-.22-.1.25.25 0 0 1 0-.17 3.93 3.93 0 0 1 1.35-2.24 3.84 3.84 0 0 1 2.46-.86 4.38 4.38 0 0 1 1 .12A6.06 6.06 0 0 0 9 21.23a1.32 1.32 0 0 0 0 .71zM18.42 12.48a2.47 2.47 0 0 1-1.5 2.28c-.45.18-.943.23-1.42.14a2.45 2.45 0 0 1-1.26-.66 2.47 2.47 0 0 1-.53-2.68 2.44 2.44 0 0 1 .91-1.1 2.46 2.46 0 0 1 3.82 2.02h-.02zM21.09 21.41a.41.41 0 0 1 0 .19.506.506 0 0 1-.48.34h-9.25a.41.41 0 0 1-.21-.05.37.37 0 0 1-.15-.13.29.29 0 0 1-.09-.16.31.31 0 0 1 0-.19A5 5 0 0 1 12 19.07c.199-.247.427-.469.68-.66a5.22 5.22 0 0 1 6.59 0c.254.194.485.415.69.66a5 5 0 0 1 1.13 2.34zM22.87 16.79a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM11.06 14.83a2 2 0 0 1-1.22 1.83 1.94 1.94 0 0 1-1.14.11 1.92 1.92 0 0 1-1-.54 2 2 0 0 1-.42-2.15 1.93 1.93 0 0 1 .72-.89 2 2 0 0 1 3.07 1.64h-.01z" 
         fill="#fff"/>
         </svg> &nbsp; 
         <p className='text-center' style={{fontSize:"13px",paddingTop:"10px"}}>choose  Associate</p>
        </div>
        <div className='d-flex  flex-row align-items-center p-2'//style={{height:"100px", width:"100px",borderWidth:"2px",borderStyle:"solid",borderRadius:"5px"}}
         onClick={handleClick}>
         <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="4" fill="#666"/>
          <path d="M5.052 18.008h6.837v.997h-1.59a.155.155 0 0 0-.15.159c0 .087.068.159.15.159h3.93c.083 0 .15-.072.15-.159a.155.155 0 0 0-.15-.159h-1.59v-.996h6.838c.028 0 .051-.025.051-.055V9.117c0-.03-.023-.055-.051-.055H5.052c-.029 0-.052.025-.052.055v8.837c0 .03.023.055.052.055z" fill="#fff"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M26.174 8h-4.342a.826.826 0 0 0-.832.819v12.193c0 .413.313.758.718.811h.002l-.002.011a.028.028 0 0 0-.003.01c0 .087.07.156.157.156h4.255c.087 0 .158-.07.158-.155a.047.047 0 0 0-.004-.017l-.002-.005h.003a.824.824 0 0 0 .718-.81V8.818A.817.817 0 0 0 26.174 8zM24 15.625a.46.46 0 0 0 .22-.872c-.013-.009-.021-.02-.021-.036v-.136c0-.013.005-.024.016-.032.01-.008.025-.008.038-.003a.663.663 0 0 1 .424.619.674.674 0 0 1-.677.666.674.674 0 0 1-.677-.666c0-.273.166-.517.424-.619.011-.005.027-.002.038.003.011.008.017.019.017.032v.136a.041.041 0 0 1-.022.035.46.46 0 0 0 .22.873zm-.103-.466v-.752c0-.056.046-.102.103-.102.057 0 .104.046.104.102v.752a.103.103 0 0 1-.104.102.102.102 0 0 1-.103-.102zm-1.638-4.53h3.77v.421h-3.77v-.422zm3.77-1.14h-3.77v.422h3.77V9.49z" fill="#fff"/>
           <path d="M8.02 20.651c-.242 0-.436.208-.436.46v2.426c0 .255.197.463.435.463h8.496c.241 0 .435-.208.435-.463v-2.426a.449.449 0 0 0-.434-.46H8.018zm6.93.652c0-.047.036-.088.082-.088h.376c.044 0 .082.038.082.088v.389c0 .046-.036.087-.082.087h-.376a.086.086 0 0 1-.083-.087v-.39zm.116.808v.389c0 .046-.037.087-.083.087h-.376a.086.086 0 0 1-.082-.087v-.39c0-.046.036-.087.082-.087h.376c.047 0 .083.041.083.088zm-.96-.808c0-.047.036-.088.082-.088h.376c.044 0 .083.038.083.088v.389c0 .046-.037.087-.083.087h-.376a.086.086 0 0 1-.083-.087v-.39zm.116.808v.389c0 .046-.036.087-.08.087h-.378a.086.086 0 0 1-.083-.087v-.39c0-.046.036-.087.083-.087h.375c.047 0 .083.041.083.088zm-.96-.808c0-.047.036-.088.08-.088h.375c.044 0 .083.038.083.088v.389c0 .046-.036.087-.083.087h-.375c-.045 0-.08-.038-.08-.087v-.39zm.116.808v.389c0 .046-.037.087-.083.087h-.376a.086.086 0 0 1-.082-.087v-.39c0-.046.036-.087.082-.087h.376c.047 0 .083.041.083.088zm-.96-.808c0-.047.036-.088.082-.088h.376c.044 0 .08.038.08.088v.389c0 .046-.036.087-.08.087H12.5a.086.086 0 0 1-.082-.087v-.39zm.119.808v.389c0 .046-.037.087-.083.087h-.376a.086.086 0 0 1-.083-.087v-.39c0-.046.037-.087.083-.087h.376c.044 0 .082.041.082.088zm-.961-.808c0-.047.036-.088.083-.088h.375c.044 0 .083.038.083.088v.389c0 .046-.036.087-.083.087h-.375a.086.086 0 0 1-.083-.087v-.39zm.117.808v.389c0 .046-.037.087-.083.087h-.376a.086.086 0 0 1-.082-.087v-.39c0-.046.036-.087.082-.087h.376c.046 0 .083.041.083.088zm-.96-.808c0-.047.035-.088.082-.088h.376c.044 0 .082.038.082.088v.389c0 .046-.036.087-.082.087h-.379a.086.086 0 0 1-.082-.087v-.39h.002zm.116.808v.389c0 .046-.037.087-.083.087h-.376a.086.086 0 0 1-.083-.087v-.39c0-.046.037-.087.083-.087h.376c.046 0 .083.041.083.088zm-.96-.808c0-.047.035-.088.082-.088h.376c.044 0 .082.038.082.088v.389c0 .046-.036.087-.082.087H9.97a.086.086 0 0 1-.083-.087v-.39zm.116.808v.389c0 .046-.036.087-.083.087h-.375a.086.086 0 0 1-.083-.087v-.39c0-.046.036-.087.083-.087h.375c.047 0 .083.041.083.088zm-.96-.808c0-.047.036-.088.082-.088h.376c.044 0 .083.038.083.088v.389c0 .046-.037.087-.083.087h-.376a.086.086 0 0 1-.083-.087v-.39zm.118.808v.389c0 .046-.036.087-.083.087h-.375c-.044 0-.08-.038-.08-.087v-.39c0-.046.036-.087.08-.087h.375c.045 0 .083.041.083.088zm-.963-.808c0-.047.037-.088.083-.088h.376c.044 0 .082.038.082.088v.389c0 .046-.036.087-.082.087h-.376a.086.086 0 0 1-.083-.087v-.39zm.541 2.004c0 .047-.036.088-.082.088h-.376a.086.086 0 0 1-.083-.088v-.389c0-.046.037-.087.083-.087h.376c.044 0 .082.038.082.087v.39zm.842 0c0 .047-.036.088-.083.088h-.376a.086.086 0 0 1-.082-.088v-.389c0-.046.036-.087.082-.087H9.5c.044 0 .083.038.083.087v.39zm.844 0c0 .047-.037.088-.083.088h-.376a.086.086 0 0 1-.083-.088v-.389c0-.046.037-.087.083-.087h.376c.044 0 .083.038.083.087v.39zm3.373 0c0 .047-.036.088-.083.088h-2.905a.086.086 0 0 1-.082-.088v-.389c0-.046.036-.087.082-.087h2.905c.044 0 .083.038.083.087v.39zm.844 0c0 .047-.036.088-.083.088h-.375a.086.086 0 0 1-.083-.088v-.389c0-.046.036-.087.083-.087h.375c.044 0 .083.038.083.087v.39zm1.053 0c0 .047-.036.088-.082.088h-.588a.086.086 0 0 1-.083-.088v-.389c0-.046.036-.087.083-.087h.588c.044 0 .082.038.082.087v.39zm.635-.561c0 .047-.036.088-.083.088h-.375a.086.086 0 0 1-.083-.088v-.162h-.223a.086.086 0 0 1-.083-.087v-.39c0-.046.036-.087.083-.087h.681c.044 0 .083.038.083.088v.638zm0-1.054c0 .046-.036.087-.083.087h-.375a.086.086 0 0 1-.083-.087v-.39c0-.046.036-.087.083-.087h.375c.044 0 .083.038.083.088v.389zM18.434 20.906v.788c0 .425.326.773.73.773.404 0 .73-.345.73-.773v-.788c0-.425-.326-.773-.73-.773-.404 0-.73.348-.73.773zm.841-.468v.542c0 .066-.051.12-.113.12-.063 0-.114-.055-.114-.12v-.543c0-.065.051-.12.114-.12.062 0 .113.055.113.12z" fill="#fff"/>
          </svg> &nbsp; 
            <p className='text-center' style={{fontSize:"13px",paddingTop:"10px"}}> Assign  Asset</p>
        </div>
        <div className='d-flex  flex-row align-items-center p-2' >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="4" fill="#666"/>
              <path d="M11.843 16.009H9.104c-.057 0-.104.084-.104.19 0 .104.047.188.104.188h2.739c.058 0 .104-.084.104-.189s-.046-.19-.104-.19zM12.871 13.075l-.776-.798a.182.182 0 0 1 0-.253.17.17 0 0 1 .246 0l.776.798a.182.182 0 0 1 0 .253.17.17 0 0 1-.246 0zM16.111 10.179v1.546a.176.176 0 0 1-.173.179.176.176 0 0 1-.174-.18V10.18c0-.099.078-.179.174-.179.095 0 .173.08.173.179zM19.963 12.213a.182.182 0 0 1 0 .253l-.778.8a.17.17 0 0 1-.245 0 .182.182 0 0 1 0-.252l.778-.801a.17.17 0 0 1 .245 0zM13.055 18.925l-.776.799a.182.182 0 0 0 0 .252.171.171 0 0 0 .246 0l.776-.798a.182.182 0 0 0 0-.253.17.17 0 0 0-.246 0zM16.111 21.821v-1.546a.176.176 0 0 0-.173-.179.176.176 0 0 0-.174.18v1.545c0 .099.078.18.174.18.095 0 .173-.08.173-.18zM19.78 19.977a.182.182 0 0 0 0-.253l-.78-.801a.17.17 0 0 0-.245 0 .182.182 0 0 0 0 .253l.779.8a.171.171 0 0 0 .245 0zM22.895 16.009h-2.738c-.058 0-.104.084-.104.19 0 .104.046.188.104.188h2.738c.058 0 .105-.084.105-.189s-.047-.19-.105-.19z" fill="#fff"/>
              <circle cx="16" cy="16" r="4.4" fill="#fff" stroke="#666" stroke-width=".8"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.382 6.925a1.01 1.01 0 0 0 .61-.932H17a1.003 1.003 0 0 0-1.554-.825.996.996 0 0 0-.37.45c-.154.375-.07.806.215 1.094.14.14.32.233.513.27.194.037.394.017.578-.057zm1.614 1.912a.115.115 0 0 0 0-.063 1.573 1.573 0 0 0-.443-.778 1.6 1.6 0 0 0-.27-.219c-.753-.519-1.831-.519-2.583 0a1.43 1.43 0 0 0-.267.22c-.22.222-.367.49-.427.777a.09.09 0 0 0 0 .063c.005.02.017.039.035.053a.14.14 0 0 0 .059.043.184.184 0 0 0 .082.017h3.626a.19.19 0 0 0 .086-.017.205.205 0 0 0 .066-.043.164.164 0 0 0 .036-.053zM25.382 15.925a1.01 1.01 0 0 0 .61-.932H26a1.003 1.003 0 0 0-1.554-.825.995.995 0 0 0-.37.45c-.154.375-.07.806.215 1.094.14.14.32.233.513.27.194.037.394.017.578-.057zm1.614 1.912a.115.115 0 0 0 0-.063 1.573 1.573 0 0 0-.443-.778 1.602 1.602 0 0 0-.27-.219c-.753-.519-1.831-.519-2.583 0-.1.064-.19.137-.267.22-.22.222-.367.49-.427.777a.09.09 0 0 0 0 .063c.005.02.017.039.035.053a.14.14 0 0 0 .059.043.184.184 0 0 0 .082.017h3.626c.03.001.06-.005.086-.017a.205.205 0 0 0 .066-.043.164.164 0 0 0 .036-.053zM7.382 15.925a1.01 1.01 0 0 0 .61-.932H8a1.003 1.003 0 0 0-1.554-.825.996.996 0 0 0-.37.45c-.154.375-.07.806.215 1.094.14.14.32.233.513.27.194.037.394.017.578-.057zm1.614 1.912a.116.116 0 0 0 0-.063 1.572 1.572 0 0 0-.443-.778 1.6 1.6 0 0 0-.27-.219c-.753-.519-1.831-.519-2.583 0-.1.064-.19.137-.267.22-.22.222-.367.49-.427.777a.088.088 0 0 0 0 .063c.005.02.017.039.035.053a.14.14 0 0 0 .059.043.184.184 0 0 0 .082.017h3.625c.03.001.06-.005.087-.017a.204.204 0 0 0 .066-.043.165.165 0 0 0 .036-.053zM9.382 8.925a1.01 1.01 0 0 0 .61-.932H10a1.003 1.003 0 0 0-1.554-.825.996.996 0 0 0-.37.45c-.154.375-.07.806.215 1.094.14.14.32.233.513.27.194.037.394.017.578-.057zm1.614 1.912a.115.115 0 0 0 0-.063 1.572 1.572 0 0 0-.443-.778 1.6 1.6 0 0 0-.27-.219c-.753-.519-1.831-.519-2.583 0-.1.064-.19.137-.267.22-.22.222-.367.49-.427.777a.088.088 0 0 0 0 .063c.005.02.017.039.035.053a.14.14 0 0 0 .059.043.184.184 0 0 0 .082.017h3.625c.03.001.06-.005.087-.017a.205.205 0 0 0 .066-.043.164.164 0 0 0 .036-.053zM23.382 8.925a1.01 1.01 0 0 0 .61-.932H24a1.003 1.003 0 0 0-1.554-.825.996.996 0 0 0-.37.45c-.154.375-.07.806.215 1.094.14.14.32.233.513.27.194.037.394.017.578-.057zm1.614 1.912a.115.115 0 0 0 0-.063 1.572 1.572 0 0 0-.443-.778 1.6 1.6 0 0 0-.27-.219c-.753-.519-1.831-.519-2.583 0a1.43 1.43 0 0 0-.267.22c-.22.222-.367.49-.427.777a.09.09 0 0 0 0 .063c.005.02.017.039.035.053a.14.14 0 0 0 .059.043.184.184 0 0 0 .082.017h3.626c.03.001.06-.005.086-.017a.205.205 0 0 0 .066-.043.164.164 0 0 0 .036-.053zM23.382 22.925a1.01 1.01 0 0 0 .61-.932H24a1.003 1.003 0 0 0-1.554-.825.995.995 0 0 0-.37.45c-.154.375-.07.806.215 1.094.14.14.32.233.513.27.194.037.394.017.578-.057zm1.614 1.912a.115.115 0 0 0 0-.063 1.573 1.573 0 0 0-.443-.778 1.602 1.602 0 0 0-.27-.219c-.753-.519-1.831-.519-2.583 0-.1.064-.19.137-.267.22-.22.222-.367.49-.427.777a.09.09 0 0 0 0 .063c.005.02.017.039.035.053a.14.14 0 0 0 .059.043.184.184 0 0 0 .082.017h3.626c.03.001.06-.005.086-.017a.205.205 0 0 0 .066-.043.164.164 0 0 0 .036-.053zM9.382 22.925a1.01 1.01 0 0 0 .61-.932H10a1.003 1.003 0 0 0-1.554-.825.996.996 0 0 0-.37.45c-.154.375-.07.806.215 1.094.14.14.32.233.513.27.194.037.394.017.578-.057zm1.614 1.912a.115.115 0 0 0 0-.063 1.573 1.573 0 0 0-.443-.778 1.602 1.602 0 0 0-.27-.219c-.753-.519-1.831-.519-2.583 0-.1.064-.19.137-.267.22-.22.222-.367.49-.427.777a.088.088 0 0 0 0 .063c.005.02.017.039.035.053a.14.14 0 0 0 .059.043.184.184 0 0 0 .082.017h3.625c.03.001.06-.005.087-.017a.205.205 0 0 0 .066-.043.164.164 0 0 0 .036-.053zM16.382 24.925a1.01 1.01 0 0 0 .61-.932H17a1.003 1.003 0 0 0-1.554-.825.995.995 0 0 0-.37.45c-.154.375-.07.806.215 1.094.14.14.32.233.513.27.194.037.394.017.578-.057zm1.614 1.912a.115.115 0 0 0 0-.063 1.573 1.573 0 0 0-.443-.778 1.602 1.602 0 0 0-.27-.219c-.753-.519-1.831-.519-2.583 0-.1.064-.19.137-.267.22-.22.222-.367.49-.427.777a.09.09 0 0 0 0 .063c.005.02.017.039.035.053a.14.14 0 0 0 .059.043.184.184 0 0 0 .082.017h3.626c.03.001.06-.005.086-.017a.205.205 0 0 0 .066-.043.164.164 0 0 0 .036-.053z" fill="#fff"/>
              <path d="m14 15.972 1.012 1.013 2.485-2.485" stroke="#666" stroke-width=".8" stroke-linecap="round" stroke-linejoin="round"/>
        </svg> &nbsp; 
            <p className='text-center' style={{fontSize:"13px",paddingTop:"10px"}}> Assign  Project</p>
        </div>
    </div> 
    </div>
  )
}
export default withRouter(AllocateAssets);