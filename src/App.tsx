import "../src/styles/styles.css";

import { Box, Button, ThemeProvider, createTheme, useTheme } from '@mui/material';
import Form, { darkGrey, fieldBorder } from './components/Form';
import React, { useCallback, useState } from 'react';

import WebSocketConnection from "./components/Websocket";

function App() {
  const [showForm, setShowForm] = useState(true);
  const [showWebsockets, setShowWebsockets] = useState(false);

  let theme = useTheme();

  theme = createTheme(theme, {
    components: {

      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: fieldBorder,
            },
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputBase-root': {
              '& fieldset': {
                borderColor: fieldBorder,
              },
              '&.Mui-focused fieldset': {
                borderColor: fieldBorder,
                borderWidth: "1px"
              },
              height: '31px',
              width: '311px',
              borderRadius: '3px',
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "28px"
            },
          }
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            marginRight: "5px",
            fontSize: "14px",
            lineHeight: "17px",
            color: darkGrey
          }
        },
      },
      typography: {
        fontFamily: "Roboto"
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontSize: "14px",
            lineHeight: "20px",
            color: darkGrey,
            "&.Mui-selected": {
              color: "#444444",
              fontWeight: "500",
            },
          }
        }
      },
    }
  });

  const onShowFormClick = useCallback(() => {
    setShowForm(true);
    setShowWebsockets(false);
  }, []);

  const onShowWebsocketsClick = useCallback(() => {
    setShowForm(false);
    setShowWebsockets(true);
  }, []);


  const onCloseClick = useCallback(() => {
    setShowForm(false);
  }, []);

  return (
    <>
      <Box sx={{ marginBottom: "30px" }}>
        <Button disableRipple onClick={onShowFormClick}>Show Form</Button>
        <Button disableRipple onClick={onShowWebsocketsClick}>Show websocket</Button>
      </Box>
      <ThemeProvider theme={theme}>
        {
          showForm && <Form
            headerText="Multiple Object Detection"
            footer={true}
            onCloseClick={onCloseClick}
          />
        }
        {
          showWebsockets && <WebSocketConnection />
        }

      </ThemeProvider>


    </>
  );
}

export default App;
