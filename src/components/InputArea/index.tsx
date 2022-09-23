import * as C from './styles';
import { Item } from '../../types/Items';

type Props = {
    onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2022, 9, 25),
            category: 'food',
            title: 'teste',
            value: 290,
        };
        onAdd(newItem);
    };
    return (
        <C.Container>
            <button onClick={handleAddEvent}>Adicionar</button>
        </C.Container>
    );
};
