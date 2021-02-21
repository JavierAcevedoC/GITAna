import React , { Component } from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Folder } from '@material-ui/icons';

interface IListBranchs {
    branchs: Array<string> 
}

class ListBranchs extends Component<any, IListBranchs> {
    
    constructor(props: IListBranchs) {
        super(props);

        this.state = {
            branchs: props.branchs
        };
    }

    public render() {
      return (
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                Ramas del Proyecto
            </ListSubheader>
          }
        >
        {
           this.props.branchs.map( (branch: string, ind: number) => {
            
                return (
                <ListItem key={ ind } button>
                    <ListItemIcon>
                        <Folder/>
                    </ListItemIcon>
                    <ListItemText primary={ branch }/>
                </ListItem>)
            })
        }
        </List>
      );
    }
}
export default ListBranchs;
