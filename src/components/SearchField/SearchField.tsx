import React, { useState } from "react";
import { SearchFieldProps, User } from "./SearchField.types";
import {Container,Input,Section,SectionHeader,UserRow,Avatar,Email,} from "./SearchField.styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const SearchField: React.FC<SearchFieldProps> = ({ users, emailCheck = false, width }) => {
  const [query, setQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState({attended: false,absent: false,});

  const filtered = users.filter((user) =>
    user.fullName.toLowerCase().includes(query.toLowerCase())
  );

  const grouped = {
    attended: filtered.filter((u) => u.status === "attended"),
    absent: filtered.filter((u) => u.status === "absent"),
  };

  const toggle = (key: "attended" | "absent") => {
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  

  const renderUsers = (list: User[]) =>
    list.map((user) => (
      <UserRow
        key={user.id}
        onClick={() => setSelectedUser(user.id)}
        selected={selectedUser === user.id}
      >
        <Avatar src={user.avatarUrl} alt={user.fullName} />
        <div>
          <div>{user.fullName}</div>
          {emailCheck && <Email>{user.email}</Email>}
        </div>
      </UserRow>
    ));

  return (
    <Container width={width}>
      <Input
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Section>
        <SectionHeader
          onClick={() => toggle("attended")}
          collapsed={String(collapsed.attended)} 
        >
          <span>Attended</span>
          {collapsed.attended ? <FontAwesomeIcon icon={faChevronRight} /> : <FontAwesomeIcon icon={faChevronDown} />}
          </SectionHeader>
        {!collapsed.attended && renderUsers(grouped.attended)}
      </Section>

      <Section>
        <SectionHeader
          onClick={() => toggle("absent")}
          collapsed={String(collapsed.absent)}
        >
          <span>Absent</span>
          {collapsed.absent ? <FontAwesomeIcon icon={faChevronRight} /> : <FontAwesomeIcon icon={faChevronDown} />}
          </SectionHeader>{" "}
        {!collapsed.absent && renderUsers(grouped.absent)}
      </Section>
    </Container>
  );
};
