import "./Form.styles.scss";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { IMaskInput } from "react-imask";
import ResultTable from "../ResultTable/ResultTable.component";
import Header from "../Header/Header.component";

const Form = () => {
    const schema = yup.object().shape({
        peso: yup.string().required("Por favor digite o seu peso"),
        altura: yup.string().required("Por favor digite a sua altura"),
    });

    const {
        control,
        handleSubmit,
        setValue,
        trigger,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { peso: "", altura: "" },
        mode: "onTouched",
    });

    const [valuePeso, setValuePeso] = useState("");
    const [valueAltura, setValueAltura] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const onSubmit = () => {
        if (isValid) {
            reset();
            setValuePeso("");
            setValueAltura("");
            setIsValid(false);
            setDisabled(false);
        } else {
            setIsValid(true);
            setDisabled(true);
        }
    };

    return (
        <div className="content">
            <Header/>
            <form onSubmit={handleSubmit(onSubmit)} className="formContainer">
                <div className="inputContainer">
                    <div className="inputContent">
                        <label htmlFor="inputPeso" className="labelInput">
                            Peso
                        </label>
                        <Controller
                            name="peso"
                            control={control}
                            render={({ field }) => (
                                <IMaskInput
                                    id="inputPeso"
                                    mask={Number}
                                    scale={2}
                                    radix="."
                                    mapToRadix={["."]}
                                    className="inputForm"
                                    placeholder="KG"
                                    value={field.value}
                                    disabled={disabled}
                                    onAccept={(value) => {
                                        setValue("peso", value);
                                        setValuePeso(value);
                                        trigger("peso");
                                    }}
                                    onBlur={field.onBlur}
                                />
                            )}
                        />
                        {errors.peso && (
                            <span className="spanError">{errors.peso.message}</span>
                        )}
                    </div>

                    <div className="inputContent">
                        <label htmlFor="inputAltura" className="labelInput">
                            Altura
                        </label>
                        <Controller
                            name="altura"
                            control={control}
                            render={({ field }) => (
                                <IMaskInput
                                    id="inputAltura"
                                    mask="0,0[0]"
                                    className="inputForm"
                                    placeholder="M"
                                    value={field.value}
                                    disabled={disabled}
                                    onAccept={(value) => {
                                        setValue("altura", value);
                                        setValueAltura(value);
                                        trigger("altura");
                                    }}
                                    onBlur={field.onBlur}
                                />
                            )}
                        />
                        {errors.altura && (
                            <span className="spanError">{errors.altura.message}</span>
                        )}
                    </div>
                </div>

                <button type="submit" className="formButton">
                    {isValid ? "Refazer" : "Calcular"}
                </button>
            </form>

            <ResultTable
                inputsConfirm={isValid}
                valueAltura={valueAltura}
                valuePeso={valuePeso}
            />
        </div>
    );
};

export default Form;
