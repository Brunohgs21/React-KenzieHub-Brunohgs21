import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Inter&family=Nunito&family=Roboto:wght@700&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: 0;

    .app{
        
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    }
}
`;
