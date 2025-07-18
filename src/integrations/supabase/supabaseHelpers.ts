import type { Database } from './types';


// 1. SELECT: Fetch all users
export const fetchUsers = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('*')

  if (error) {
    console.error('Error fetching users:', error)
    return null
  }

  return data
}

// 2. INSERT: Create a new user
export const createUser = async (userData: any) => {
  const { data, error } = await supabase
    .from('users')
    .insert(userData)
    .select()

  if (error) {
    console.error('Error creating user:', error)
    return null
  }

  return data
}

// 3. UPDATE: Update a user's information
export const updateUser = async (userId: string, updateData: any) => {
  const { data, error } = await supabase
    .from('users')
    .update(updateData)
    .eq('id', userId)
    .select()

  if (error) {
    console.error('Error updating user:', error)
    return null
  }

  return data
}

// 4. DELETE: Remove a user
export const deleteUser = async (userId: string) => {
  const { data, error } = await supabase
    .from('users')
    .delete()
    .eq('id', userId)

  if (error) {
    console.error('Error deleting user:', error)
    return null
  }

  return data
}

// 5. ADVANCED: Filtering and Sorting
export const fetchFilteredUsers = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .gt('age', 18)
    .order('created_at', { ascending: false })
    .limit(10)

  if (error) {
    console.error('Error fetching filtered users:', error)
    return null
  }

  return data
}
