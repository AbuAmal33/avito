import React from 'react';
import {useEffect} from "react";
import {closeModal, loadModals} from "../Redux/action";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Modal from "./Modal";
import Comments from "./Comments";
import Input from "./Input";

function Modals(props) {
    const id = parseInt(useParams().id);
    const dispatch = useDispatch();
    const modals = useSelector(state => state.modals.items);
    const opened = useSelector(state => state.modals.opened);
    const loadingComments = useSelector(state => state.modals.loadingComments);
    const comments = useSelector(state => state.modals.comments);
    const loading = useSelector(state => state.modals.loading);

    useEffect(() => {
        dispatch(loadModals(id))
    }, [dispatch, id]);

    const handleClick = () => {
        dispatch(closeModal());
    };

    if (opened === null) {
        return null;
    }

    if(loading === true) {
        return (
            <div>
                Идет загрузка, повремените жи есть...
            </div>
        )
    }


    return (
        <div className={'modals'}>
            {loadingComments ? (
                <div> Идет загрузка... </div>
            ) : (
                <div className={'modal'}>
                    <div className={'modal__content'}>
                        <Modal key={modals.id} modal={modals} />
                        <Input />
                        {comments.map((comment) => {
                            return <Comments comment={comment} key={comment.id}/>
                        })}
                        <div className={'close_modal'} onClick={handleClick}>
                            <h1>X</h1>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Modals;
