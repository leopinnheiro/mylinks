import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const database = [{
      id: '1',
      name: 'Notion',
      description: 'Organização de tarefas',
      link: 'https://www.notion.so/pt-br',
      category: 'Produtividade',
    }, {
      id: '2',
      name: 'Gmail',
      description: 'Caixa de e-mails',
      link: 'https://www.google.com/',
      category: '',
    }];

    localStorage.setItem('@mylinks-db', JSON.stringify(database));
    const storageLinks = JSON.parse(
      localStorage.getItem('@mylinks-db'),
    );
    if (storageLinks) {
      setLinks(storageLinks);
    }
  }, []);

  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar link" />
      </InputSearchContainer>

      <Header>
        <strong>
          {links.length}
          {links.length === 1 ? ' link' : ' links'}
        </strong>
        <Link to="/new">Novo link</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        {links.map((link) => (
          <Card key={link.id} href={link.link} target="_blank" rel="noopener noreferrer">
            <div className="info">
              <div className="link-name">
                <strong>{link.name}</strong>
                {link.category && (
                  <small>{link.category}</small>
                )}
              </div>
              <span>{link.description}</span>
            </div>

            <div className="actions">
              <Link to={`/edit/${link.id}`}>
                <img src={edit} alt="Edit" />
              </Link>
              <button type="button">
                <img src={trash} alt="Delete" />
              </button>
            </div>
          </Card>
        ))}

      </ListContainer>
    </Container>
  );
}
