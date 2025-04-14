import styled from 'styled-components';

export const Container = styled.div<{ width?: string }>`
   width: ${({ width }) => width || '100%'};
  box-sizing: border-box;
`;


export const Input = styled.input`
  font-family: Helvetica;
  width: 100%;
  padding: 12px 12px 12px 35px;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/d/df/Magnifying-glass-1976105_640.png");
  background-size: 13px;
  background-repeat: no-repeat;
  background-position: 10px center;
  border:none;
  outline: none;

`;

export const Section = styled.div`
  width: 100%;
  margin-top: 0px;
`;

export const SectionHeader = styled.div<{ collapsed: string }>`
  width: 100%;
  font-family: Helvetica;
  color: #666;
  font-weight: 540;
  cursor: pointer;
  background: #f9f9f9;
  padding: 12px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserRow = styled.div<{ selected?: boolean }>`
  width: 100%;
  font-family: Helvetica;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ selected }) => (selected ? '#f4f1fd' : 'transparent')};
  color: ${({ selected }) => (selected ? '#7351f0' : '#000')};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#f4f1fd' : '#f0f0f0')};
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const Email = styled.div`
  color: #777;
  font-size: 0.9em;
`;


