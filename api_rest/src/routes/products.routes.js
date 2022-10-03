import {Router} from 'express'
import { createNewSolicitud, getSolicitud, getSolicitudById, updateSolicitud} from '../controllers/products.controller'
const router = Router()

router.get('/products', getSolicitud)

router.post('/products', createNewSolicitud)

router.get('/products/:idsolicitud', getSolicitudById)

router.put('/products/:idsolicitud', updateSolicitud)

router.put('/products', )

export default router