import { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const WARNING_MESSAGE_TEXT = `Do not use this app if you want the best experience that this game offers. And if you are using this app to solve the daily WORDLE, please don’t share your results on social media. Your streak can be annoying for ones who strive to solve it without any cheating, it could jeopardise some of your friendships. Trust me, some people take this game very seriously. But it can also be a good way to practise this game and to improve your English vocabulary.`;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: 'rgb(255, 244, 229)',
    color: 'rgb(102, 60, 0)',
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function CustomizedDialogs() {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          ⚠️Warning⚠️
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{WARNING_MESSAGE_TEXT}</Typography>
        </DialogContent>
        <DialogContent dividers>
          <Typography gutterBottom>
            You can test this app here:{' '}
            <a
              rel="noopener noreferrer"
              href="https://www.devangthakkar.com/wordle_archive/"
              target="_blank"
              style={{ textDecoration: 'none', fontWeight: 'bold' }}
            >
              Wordle Archive
            </a>
            .
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" autoFocus onClick={handleClose}>
            Okay, I understood
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
