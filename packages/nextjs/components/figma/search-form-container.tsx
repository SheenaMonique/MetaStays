import type { NextPage } from "next";
import { useState, useCallback } from "react";
import { Autocomplete, TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useRouter } from "next/router";
import styles from "./search-form-container.module.css";

const SearchFormContainer: NextPage = () => {
  const [startDateDateTimePickerValue, setStartDateDateTimePickerValue] =
    useState<string | null>(null);
  const [endDateDateTimePickerValue, setEndDateDateTimePickerValue] = useState<
    string | null
  >(null);
  const router = useRouter();

  const onButtonGroupContainerClick = useCallback(() => {
    router.push("/mint-the-key");
  }, [router]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.searchForm}>
        <div className={styles.formTitleGroup}>
          <div className={styles.searchMetastays}>Search METASTAYS</div>
          <div />
        </div>
        <div className={styles.formInputsRow}>
          <div className={styles.inputsRow}>
            <Autocomplete
              className={styles.departureField}
              size="medium"
              disablePortal
              options={[
                "Singapore (SIN)",
                "Sydney (SYD)",
                "Siem Reap (REP)",
                "Shanghai (PVG)",
                "Sanya (SYX)",
              ]}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  color="primary"
                  label="Location of MetaStay"
                  variant="outlined"
                  placeholder=""
                  helperText=""
                />
              )}
              defaultValue="Singapore -  Changi (SIN)"
            />
            <div className={styles.startDate}>
              <DatePicker
                label="Begining of MetaStay"
                value={startDateDateTimePickerValue}
                onChange={(newValue: any) => {
                  setStartDateDateTimePickerValue(newValue);
                }}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    size: "medium",
                    fullWidth: true,
                    color: "primary",
                  },
                }}
              />
            </div>
            <div className={styles.departureField}>
              <DatePicker
                label="End of MetaStay"
                value={endDateDateTimePickerValue}
                onChange={(newValue: any) => {
                  setEndDateDateTimePickerValue(newValue);
                }}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    size: "medium",
                    fullWidth: true,
                    color: "primary",
                  },
                }}
              />
            </div>
          </div>
          <div
            className={styles.buttonGroup}
            onClick={onButtonGroupContainerClick}
          >
            <div className={styles.searchFlightsButton}>
              <div className={styles.button}>Search</div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchFormContainer;
