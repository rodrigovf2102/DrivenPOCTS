--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;


CREATE TABLE public.responsibles (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    age integer NOT NULL,
    token text NOT NULL
);


CREATE SEQUENCE public.responsibles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.responsibles_id_seq OWNED BY public.responsibles.id;



CREATE TABLE public.tasks (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    description text NOT NULL,
    day date NOT NULL,
    "idResponsible" integer,
    status boolean DEFAULT false NOT NULL
);


CREATE SEQUENCE public.tasks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;



ALTER SEQUENCE public.tasks_id_seq OWNED BY public.tasks.id;



ALTER TABLE ONLY public.responsibles ALTER COLUMN id SET DEFAULT nextval('public.responsibles_id_seq'::regclass);


ALTER TABLE ONLY public.tasks ALTER COLUMN id SET DEFAULT nextval('public.tasks_id_seq'::regclass);


INSERT INTO public.responsibles VALUES (1, 'Rodrigo', 19, 'a2ffdbf3-d364-49bc-88df-b0ca55294980');
INSERT INTO public.responsibles VALUES (2, 'Paulo', 24, 'd5ffdbf3-d364-46bc-88df-b0ca55294980');
INSERT INTO public.responsibles VALUES (3, 'Lucas', 23, 'f2ffdbf3-a964-46bc-88df-b0ca55294980');
INSERT INTO public.responsibles VALUES (4, 'Malu', 21, 'f2ffdbf3-d364-46bc-88df-b0ca55294980');


INSERT INTO public.tasks VALUES (2, 'Limpar a sala', 'passar a vassoura na sala', '2022-11-10', 2, false);
INSERT INTO public.tasks VALUES (3, 'Lavar a louça', 'lavar a louca na cozinha', '2022-11-11', 3, false);
INSERT INTO public.tasks VALUES (4, 'Lavar roupa', 'jogar roupa na maquina de lavar', '2022-11-13', 1, false);



SELECT pg_catalog.setval('public.responsibles_id_seq', 4, true);



SELECT pg_catalog.setval('public.tasks_id_seq', 4, true);



ALTER TABLE ONLY public.responsibles
    ADD CONSTRAINT responsibles_pkey PRIMARY KEY (id);



ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_name_key UNIQUE (name);


ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_pkey PRIMARY KEY (id);



ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT "tasks_idResponsible_fkey" FOREIGN KEY ("idResponsible") REFERENCES public.responsibles(id);


--
-- PostgreSQL database dump complete
--

