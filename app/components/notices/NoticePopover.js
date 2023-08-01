import { useEffect } from "react";
import {
  Popover,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { getNoticeFiles } from "@/utils/fetch";

export default function NoticePopover({ anchorEl, setAnchorEl, files }) {
  const getFile = useMutation(getNoticeFiles, {
    onSuccess: () => {
      console.log("onSuccess");
    },
    onError: (error) => {
      console.log("onError");
    },
  });

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        handleClose();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  const handleDownload = (fileName) => {
    const fileData = getFile.mutate(fileName);
    downloadFile(fileData, fileName);
  };

  function downloadFile(fileData, fileName) {
    // Convert the byte array to a Blob
    const blob = new Blob([fileData], { type: "application/octet-stream" });

    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = fileName;

    // Append the download link to the DOM
    document.body.appendChild(downloadLink);

    // Programmatically trigger the download
    downloadLink.click();

    // Remove the download link from the DOM
    document.body.removeChild(downloadLink);
  }

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <List>
        {files &&
          files.map((file) => {
            return (
              <ListItem disablePadding key={file.id}>
                <ListItemButton>
                  <ListItemText
                    primary={file.originalName}
                    onClick={() => handleDownload(file.savedName)}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </Popover>
  );
}
