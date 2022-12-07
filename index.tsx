import Select, {
  GroupBase,
  Props,
  components,
  DropdownIndicatorProps,
  ControlProps,
} from "react-select";
import SelectAnimated from "react-select/animated";
import { AiFillCaretDown } from "react-icons/ai";

import { StylesSelect } from "./styles";
import { Controller, Control as ControlController } from "react-hook-form";
import { FormField } from "../../FormField";

export type Options = {
  label: string;
  value: any;
};

type Option = Options;
type IsMulti = boolean;
type Group = GroupBase<Option>;

interface SelectProps extends Props<Option, IsMulti, Group> {
  defaultValue?: any;
  control?: ControlController<any>;
  options: Options[];
  name: string;
  label?: string;
  isRequired?: boolean;
  lessOptionsMessage?: string;
}

interface WithOutOptionsMessage {
  inputValue: string;
}

const AnimatedSelect = SelectAnimated();

function DropdownIndicator({ children, ...props }: DropdownIndicatorProps) {
  const { DropdownIndicator } = components;
  return (
    <DropdownIndicator {...props}>
      <AiFillCaretDown size={10} />
      {children}
    </DropdownIndicator>
  );
}

function Control({ children, ...props }: ControlProps) {
  const { Control: ControlComponent } = components;
  const { isInvalid } = props.selectProps as ControlProps["selectProps"] & {
    isInvalid?: boolean;
  };

  return (
    <ControlComponent className={isInvalid ? "invalid" : "valid"} {...props}>
      {children}
    </ControlComponent>
  );
}

export function MultiSelect({
  control: ComponentControl,
  defaultValue = "",
  label = "",
  name,
  options,
  isRequired = false,
  isMulti = true,
  isClearable = false,
  lessOptionsMessage = "Opção inexistente",
  ...props
}: SelectProps) {
  const withOutOptionsComponent = ({ inputValue }: WithOutOptionsMessage) => (
    <div style={{ textAlign: "center", flex: "1" }}>{`${
      inputValue || "Sem opções"
    }`}</div>
  );

  return (
    <Controller
      name={name}
      control={ComponentControl}
      defaultValue={defaultValue}
      render={({
        field: { name, onBlur, onChange, ref, value },
        fieldState: { error },
      }) => {
        return (
          <FormField
            label={label}
            labelFor={name}
            isRequired={isRequired}
            errorMessage={error?.message}
            isInvalid={!!error?.message}
          >
            <Select
              {...props}
              noOptionsMessage={withOutOptionsComponent}
              onBlur={onBlur}
              value={value}
              // Props invalid é passada pelo component FormField
              components={{
                ...AnimatedSelect,
                DropdownIndicator,
                Control,
              }}
              onChange={onChange}
              isMulti={isMulti}
              ref={ref}
              isClearable={isClearable}
              classNamePrefix="react-select"
              styles={StylesSelect}
              options={options}
            />
          </FormField>
        );
      }}
    />
  );
}
