import { Request, Response } from "express";
import { User } from "../entities/User";

//* obtener usuarios
export const getUsers = async ( req: Request, res: Response ) => {

  try {

    const users = await User.find();
    res.json( users );

  } catch (error) {
    return res.status(404).json({ error: 'Users not found' });
  }

};

//* crear usuario
export const createUser = async ( req: Request, res: Response ) => {
  //* Obtenemos los datos de req
  const { firstname, lastname } = req.body;

  if( !firstname || !lastname ) return res.status(400).json({ error: 'All properties were required ' })

  try {

    //* Instanciamos la clase user del modelo
    const user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    await user.save();

    res.status(201).json( user );
  } catch (error) {
    res.status(400).json({ error: "The user could not be created" })
  }
};


//* actualizar usuario
export const  updateUser = async( req: Request, res: Response ) =>  {

  const { id } = req.params;

  const { firstname, lastname } = req.body;

  if( !id ) {
    return res.status(400).json({ error:'ID argument is required' });
  }

  try {
     //* buscamos el user por su id
    const user = await User.findOneBy({ id })

    if( !user ){
      return res.status( 404 ).json({ error: `User with id ${ id } not found` })
    }

    await User.update({ id }, req.body);

    return res.status(200).json({ message: 'User was update successfully' })
    
  } catch (error) {
    return res.status(400).json({ error: 'User could not be update' });
  }


 }

//* eliminar usuario
export const deleteUser = async ( req: Request, res: Response ) => {

  const { id } = req.params;

  if( !id ) {
    return res.status(400).json({ error:'ID argument is required' });
  }

  try {
    const result = await User.delete({ id });
    res.status(200).json({ message: `User was delete successfully` });
    
  } catch (error) {
    return res.status(400).json({ error: 'User could not be delete' });
  }


}

//* obtener un usuario
export const getUser = async ( req: Request, res: Response ) => {

  const { id } = req.params;

  if( !id ) {
    return res.status(400).json({ error:'ID argument is required' });
  }

  try {
    
    //* buscamos el user por su id
    const user = await User.findOneBy({ id })

    if( !user ){
      return res.status( 404 ).json({ error: `User with id ${ id } not found` })
    }

    return res.status(200).json( user );
  } catch (error) {
    return res.status(404).json({ error: 'User not found' });
  }


}