import React from "react";
import {
  makeStyles,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  Chip,
  Input,
  MenuItem,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: "70%",
    maxWidth: "70%",
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(lang, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(lang) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function SelectLanguageMenu({
  langNames,
  setSelectedLanguageNames,
  selectedLanguageNames,
}) {
  const theme = useTheme();

  const handleChange = (event) => {
    setSelectedLanguageNames(event.target.value);
  };
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">
          {langNames.length === 0 ? "Loading" : "Select a Language"}
        </InputLabel>
        <Select
          disabled={langNames.length === 0}
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={selectedLanguageNames}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {langNames.map((lang) => (
            <MenuItem
              key={lang}
              value={lang}
              style={getStyles(lang, selectedLanguageNames, theme)}
            >
              {lang}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Paper>
  );
}

export default SelectLanguageMenu;
