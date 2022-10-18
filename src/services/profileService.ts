import Profile, { ProfileAttributes } from '../models/profile.model'

export const create = async (profile: ProfileAttributes): Promise<Profile> => {
  const newProfile = await Profile.create(profile)
  return newProfile
}

export const deleteById = async (id: number): Promise<Number> => {
  return await Profile.destroy({ where: { id } })
}

export const getAll = async (): Promise<Profile[]> => {
  return await Profile.findAll()
}

export const getById = async (id: number | string): Promise<Profile | null> => {
  return await Profile.findByPk(id)
}

export const update = async (profile: Profile, profileUpdate: ProfileAttributes): Promise<Profile> => {
  return await profile.update(profileUpdate)
}

export default {
  create,
  deleteById,
  getAll,
  getById,
  update
}
