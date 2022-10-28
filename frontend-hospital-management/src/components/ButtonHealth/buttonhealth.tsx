import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ButtonHealth() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Possui algum problema de Saúde?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="yes" control={<Radio />} label="Sim" />
        <FormControlLabel value="not" control={<Radio />} label="Não" />
      </RadioGroup>
    </FormControl>
  );
}