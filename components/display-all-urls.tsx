"use client";
import {useState} from "react";
import NewUrl from "@/components/new-url";
import createNewUrl from "@/lib/createNewUrl";
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #FED8B1;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButtons = styled.button`
  background-color: #FF6F61;
  color: #F6F2ED;
  padding: 10px 20px;
  margin: 5px;
  font-size: calc(10px + 1vw);
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:hover{
    background-color: #033E3E;
    color: #FED8B1;
  }
`;

export default function DisplayAllUrls(){
    const [url, setUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [error, setError] = useState("");
    const [shortenUrl, setShortenUrl] = useState("");

    const submitUrl = async () => {
        setShortenUrl("");
        const res = await createNewUrl({url, alias});
        if (res.length === 0) {
            setShortenUrl(window.location.href + alias);
            return;
        }

        setError(res);
    };

    return (
        <StyledDiv>
            <form
                className="p-8 m-2 text-lg bg-sky-200 flex flex-col"
                onSubmit={(e) => {
                    e.preventDefault();
                    submitUrl();
                }}
            >
                {error.length> 0 && <p>{error}</p>}
                <input
                placeholder="alias"
                type="text"
                value={alias}
                onChange={(e) => {
                    setError("");
                    setAlias(e.target.value);
                }}
            />
            <input
                    placeholder="url"
                    type="text"
                    value={url}
                onChange={(e) => {
                    setError("");
                    setUrl(e.target.value);
                }}
            />
            <StyledButtons type="submit" className="bg-sky-500">
                Submit
            </StyledButtons>
            </form>
            <NewUrl url = {shortenUrl} />
        </StyledDiv>
    );
}